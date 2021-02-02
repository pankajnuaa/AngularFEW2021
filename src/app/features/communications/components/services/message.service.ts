export class MessageService {
  private secretMessage = 'default';

  setMessage(val: string): void {
    this.secretMessage = val;
  }

  getMessage(): string {
    return this.secretMessage;
  }
}
