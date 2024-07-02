import { Component } from '@angular/core';
import { CandidateComponent } from './components/candidate/candidate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CandidateComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'candidate-frontend';
}
