export interface ScheduleAppointmentMonthModel {
  year: number;
  month: number;
  scheduledAppointments: ClientScheduleAppointmentModel[];
}

export interface ClientScheduleAppointmentModel {
  id: number;
  day: number;
  startAt: Date;
  endAt: Date;
  clientId: number;
  clientName: string;
}

export interface SaveScheduleModel {
  startAt?: Date;
  endAt?: Date;
  clientId?: number;
}

export interface SelectedClientModel {
  id: number;
  name: string;
}
