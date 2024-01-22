import { Component } from '@angular/core';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent {
  cita = { idPaciente: '', hora: '', fecha: '' };

  agendarCita() {
    // Aquí puedes llamar al servicio para enviar los datos al backend
    console.log('Cita agendada:', this.cita);
    // Puedes resetear el formulario o hacer otras acciones según tus necesidades
  }
}
