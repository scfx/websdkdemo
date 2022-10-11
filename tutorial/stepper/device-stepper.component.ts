import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { C8yStepper } from '@c8y/ngx-components';
import { StepperService } from './stepper.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { upperFirst } from 'lodash';

enum step {
  FIRST = 0,
  SECOND = 1,
  THIRD = 2
}
@Component({
  selector: 'c8y-stepper-device',
  templateUrl: './device-stepper.component.html'
})
export class DeviceStepperComponent implements OnInit {
  formGroupStepOne: FormGroup;
  formGroupStepTwo: FormGroup;

  pendingStatus: boolean = false;

  @ViewChild(C8yStepper, { static: true })
  stepper: C8yStepper;
  isModal: boolean;

  private onClose: Subject<any> = new Subject();
  constructor(
    private fb: FormBuilder,
    private stepperService: StepperService,
    private bsModalRef: BsModalRef
  ) {}

  ngOnInit() {
    this.formGroupStepOne = this.fb.group({
      name: ['', Validators.required]
    });

    this.formGroupStepTwo = this.fb.group({
      type: ['']
    });
  }

  async navigate(clickedStepIDX: number) {
    const { selectedIndex: selectedStepIDX } = this.stepper;
    const isMovingForward = clickedStepIDX > selectedStepIDX;
    if (isMovingForward) {
      this.onMovingForward(clickedStepIDX, selectedStepIDX);
    } else {
      this.onMovingBackward(clickedStepIDX, selectedStepIDX);
    }
  }
  onMovingForward(clickedStepIDX: number, selectedStepIDX: number) {
    this.stepper.next();
    if (clickedStepIDX === step.THIRD && selectedStepIDX === step.SECOND) {
      this.save();
    }
  }
  onMovingBackward(clickedStepIDX: number, selectedStepIDX: number) {
    if ((clickedStepIDX === step.FIRST || step.SECOND) && selectedStepIDX === step.THIRD) {
      this.resetStepper();
    } else if (clickedStepIDX === step.FIRST && selectedStepIDX === step.SECOND) {
      this.stepper.previous();
    }
  }
  async save() {
    this.pendingStatus = true;
    await this.addDevice();
    this.pendingStatus = false;
    this.stepper.next();
  }

  close(isModal: boolean) {
    if (isModal) {
      this.onClose.next(null);
      this.bsModalRef.hide();
    } else {
      this.resetStepper();
    }
  }

  private async addDevice() {
    await this.stepperService.addDevice({
      id: Math.random() * 1000,
      name: upperFirst(this.formGroupStepOne.get('name').value),
      type: upperFirst(this.formGroupStepTwo.get('type').value)
    });
  }

  private resetStepper() {
    this.stepper.reset();
    this.stepper.selectedIndex = 1;
  }
}
