import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // 1. Agrega este import
import { DataService } from './services/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet], // 2. Agrega RouterOutlet aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// 3. CAMBIA EL NOMBRE DE "AppComponent" a "App" para que coincida con tu main.ts
export class App implements OnInit {
  datos: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDatosDelBackend().subscribe({
      next: (res) => {
        this.datos = res;
      },
      error: (err) => console.error('Error:', err)
    });
  }
}
