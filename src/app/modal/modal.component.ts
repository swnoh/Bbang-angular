import { Component, OnInit, HostBinding } from "@angular/core";
import { ToggleService } from "../toggle.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  // @HostBinding("class.is-open")
  isOpen = false;

  constructor(private ToggleService: ToggleService) {}

  ngOnInit() {
    this.ToggleService.checkoutChange.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  closeModal() {
    this.ToggleService.checkoutToggle();
  }
}
