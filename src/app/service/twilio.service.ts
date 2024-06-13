import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwilioService {
  private apiUrl = '';
  private authToken = '';
  private twilioPhoneNumber = '';



 constructor(private http: HttpClient) {}
 sendSMS(to: string, body: string): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(`YOUR_TWILIO_SID:${this.authToken}`),
  });

  const payload = `To=${encodeURIComponent(to)}&From=${encodeURIComponent(this.twilioPhoneNumber)}&Body=${encodeURIComponent(body)}`;

  return this.http.post<any>(this.apiUrl, payload, { headers });
}
}
