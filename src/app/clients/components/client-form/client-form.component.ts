import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ClientModelForm } from "../../client.models";
import { NgxMaskDirective } from "ngx-mask";

@Component({
  selector: "app-client-form",
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMaskDirective,
  ],
  templateUrl: "./client-form.component.html",
  styleUrl: "./client-form.component.scss",
})
export class ClientFormComponent {
  @Input() client: ClientModelForm = {
    id: 0,
    name: "",
    email: "",
    phone: "",
  };

  @Output() clientSubmited = new EventEmitter<ClientModelForm>();

  onSubmit(_: NgForm) {
    this.clientSubmited.emit(this.client);
  }
}
