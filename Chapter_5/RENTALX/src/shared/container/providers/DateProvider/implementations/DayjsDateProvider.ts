import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {

    compareIfBefore(start_date: Date, end_date: Date): boolean {
        return dayjs(start_date).isBefore(end_date);
    }
    
    addDays(days: number): Date {
        return dayjs().add(days, "days").toDate();
    }

    compareInHours(start_date: Date, end_date: Date): number {     
        const end_date_UTC = this.convertToUTC(end_date);
        const start_date_UTC = this.convertToUTC(start_date);
        return dayjs(end_date_UTC).diff(start_date_UTC, "hours");
    }
    
    convertToUTC(date: Date): string {
        return dayjs(date).utc().local().format();
    }
    
    dateNow(): Date {
        return dayjs().toDate();
    }

    compareInDays(start_date: Date, end_date: Date): number {
        const end_date_UTC = this.convertToUTC(end_date);
        const start_date_UTC = this.convertToUTC(start_date);
        return dayjs(end_date_UTC).diff(start_date_UTC, "days");
    }

    addHours(hours: number): Date {
        return dayjs().add(hours, "hour").toDate();
    }
}

export { DayjsDateProvider };