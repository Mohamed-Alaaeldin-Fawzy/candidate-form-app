import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { CandidateService } from '../../services/candidate.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-candidate',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DatePickerComponent],
  templateUrl: './candidate.component.html',
})
export class CandidateComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private candidateService: CandidateService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],
      callTime: [null],
      linkedInUrl: [
        '',
        [Validators.pattern(/https?:\/\/(www\.)?linkedin\.com\/.*$/)],
      ],
      githubUrl: [
        '',
        [Validators.pattern(/https?:\/\/(www\.)?github\.com\/.*$/)],
      ],
      comments: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get phoneNumber() {
    return this.form.get('phoneNumber');
  }

  get callTime() {
    return this.form.get('callTime');
  }

  get linkedInUrl() {
    return this.form.get('linkedInUrl');
  }

  get githubUrl() {
    return this.form.get('githubUrl');
  }

  get comments() {
    return this.form.get('comments');
  }

  onDateChange(date: Date) {
    this.form.get('callTime')?.setValue(date.getTime());
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.candidateService.submitCandidate(this.form.value).subscribe({
        next: () => {
          this.form.reset();
          this.toastr.success('Candidate submitted successfully', 'Success');
        },
        error: () => {
          this.toastr.error('Candidate submission failed', 'Error');
        },
      });
    } else {
      console.log('Form is invalid');
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      this.form.updateValueAndValidity();
      this.toastr.error('Form is invalid', 'Error');
    }
  }
}
