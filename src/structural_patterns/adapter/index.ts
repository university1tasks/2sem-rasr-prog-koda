interface IClock {
  getTime(): [number, number, number];
}

class Clock implements IClock {
  public hours: number;
  public minutes: number;
  public seconds: number;

  constructor(hours: number, minutes: number, seconds: number) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  public getTime(): [number, number, number] {
    return [this.hours, this.minutes, this.seconds];
  }
}

class MechanicalClock {
  public hoursAngle: number;
  public minutesAngle: number;
  public secondsAngle: number;

  constructor(hoursAngle: number, minutesAngle: number, secondsAngle: number) {
    this.hoursAngle = hoursAngle;
    this.minutesAngle = minutesAngle;
    this.secondsAngle = secondsAngle;
  }
}

class MechanicalClockToClockAdapter implements IClock {
  public mechanicalClock: MechanicalClock;

  constructor(mechanicalClock: MechanicalClock) {
    this.mechanicalClock = mechanicalClock;
  }

  public getTime(): [number, number, number] {
    const hours: number = this.mechanicalClock.hoursAngle / 30;
    const minutes: number = this.mechanicalClock.minutesAngle / 30;
    const seconds: number = this.mechanicalClock.secondsAngle / 30;
    return [hours, minutes, seconds];
  }
}
