import { TestBed } from '@angular/core/testing';
import { ExampleComponent } from './example.component';
import { EmailEditorModule } from 'email-editor';

describe('ExampleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleComponent],
      imports: [EmailEditorModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ExampleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
