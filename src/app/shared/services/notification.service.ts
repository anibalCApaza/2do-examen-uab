import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  // Solicitar permiso
  requestPermission(): Promise<NotificationPermission> {
    if (!('Notification' in window)) {
      return Promise.reject('Este navegador no soporta notificaciones.');
    }
    return Notification.requestPermission();
  }

  // Mostrar notificación
  showNotification(title: string, options?: NotificationOptions) {
    if (!('Notification' in window)) return;
    if (Notification.permission === 'granted') {
      new Notification(title, options);
    } else {
      console.warn('No se tienen permisos para mostrar notificaciones');
    }
  }
}
