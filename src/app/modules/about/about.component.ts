import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public items = [
    {
      title: 'Bandeja de entrada',
      description: 'Si lo tienes en mente, entonces colócalo en la bandeja de entrada. Registra tus tareas pendientes en cualquier lugar y momento.',
      isActive: true
    },
    {
      title: 'Tableros',
      description: 'Tu lista de tareas pendientes puede ser larga, ¡pero manejable! Mantente al tanto de todo, desde las "tareas por hacer" hasta los "objetivo cumplido".',
      isActive: false
    },
    {
      title: 'Planificador',
      description: 'Arrastra, suelta y termina. Mete las tareas más importantes en el calendario y dedica tiempo a lo que de verdad importa.',
      isActive: false
    }
  ];

  toggleActive(index: number): void {
    this.items = this.items.map((item, i) => {
      if (i === index) {
        return { ...item, isActive: true };
      }

      return { ...item, isActive: false };
    });
  }
}
