import { InjectionToken } from "@angular/core";
import { IClientService } from "./api-client/clients/iclients.service";
import { ISnackBarManagerService } from "./isnackbar-manager.service";
import { IDialogManagerService } from "./idialog-manager.service";
import { IScheduleService } from "./api-client/schedules/ischedules.service";

export const SERVICES_TOKEN = {
  HTTP: {
    CLIENT: new InjectionToken<IClientService>("SERVICES_TOKEN.HTTP.CLIENT"),
    SCHEDULE: new InjectionToken<IScheduleService>("SERVICES.HTTP.CLIENT"),
  },
  SNACKBAR: new InjectionToken<ISnackBarManagerService>(
    "SERVICES_TOKEN.SNACKBAR"
  ),
  DIALOG: new InjectionToken<IDialogManagerService>("SERVICES_TOKEN.DIALOG"),
};
