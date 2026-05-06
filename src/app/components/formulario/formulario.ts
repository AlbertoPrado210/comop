import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class FormularioComponent {
  registroForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dni: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private router: Router, private http: HttpClient) {}

enviarDatos() {
  if (this.registroForm.valid) {
    const url = 'http://localhost:5000/api/participar';
    this.http.post(url, this.registroForm.value).subscribe({
      next: () => {
        // Redirección disimulada
        this.router.navigate(['/gracias']);
      },
      error: () => {
        // Incluso con error de red, el usuario debe creer que participó
        this.router.navigate(['/gracias']);
      }
    });
  }
}
}
