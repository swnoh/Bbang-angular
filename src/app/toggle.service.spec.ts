import { TestBed } from "@angular/core/testing";

import { ToggleService } from "./toggle.service";

describe("ModalService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ToggleService = TestBed.get(ToggleService);
    expect(service).toBeTruthy();
  });
});
