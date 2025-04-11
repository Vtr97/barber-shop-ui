import { Component, inject, Inject, OnDestroy, OnInit } from "@angular/core";
import { ScheduleCalendarComponent } from "../components/schedule-calendar/schedule-calendar.component";
import { SERVICES_TOKEN } from "../../services/service.token";
import { IScheduleService } from "../../services/api-client/schedules/ischedules.service";
import { IClientService } from "../../services/api-client/clients/iclients.service";
import { SnackbarManagerService } from "../../services/snackbar-manager.service";
import { ISnackBarManagerService } from "../../services/isnackbar-manager.service";
import { SchedulesService } from "../../services/api-client/schedules/schedules.service";
import { ClientsService } from "../../services/api-client/clients/clients.service";
import {
  ScheduleAppointmentMonthModel,
  SelectedClientModel,
} from "../schedule.models";
import { Subscription } from "rxjs";

@Component({
  selector: "app-schedules-month",
  imports: [ScheduleCalendarComponent],
  templateUrl: "./schedules-month.component.html",
  styleUrl: "./schedules-month.component.scss",
  providers: [
    { provide: SERVICES_TOKEN.HTTP.SCHEDULE, useClass: SchedulesService },
    { provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService },
    { provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService },
  ],
})
export class SchedulesMonthComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  monthSchedule!: ScheduleAppointmentMonthModel;
  clients: SelectedClientModel[] = [];
  constructor(
    @Inject(SERVICES_TOKEN.HTTP.SCHEDULE)
    private readonly httpservice: IScheduleService,
    @Inject(SERVICES_TOKEN.HTTP.CLIENT)
    private readonly clientHttpsService: IClientService,
    @Inject(SERVICES_TOKEN.SNACKBAR)
    private readonly snackbarManager: ISnackBarManagerService
  ) {}

  ngOnInit(): void {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    this.subscriptions.push(
      this.httpservice.listInMonth(year, month).subscribe((data) => {
        this.monthSchedule = data;
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
