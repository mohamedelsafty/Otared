import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Bank } from '../models/bank.model';
import { WorkCategory } from '../models/work-category.model';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    public convetToNumber(value) {
        var t = this.fromArabicNumber(value);
        return t.replace(/\D/g, "");
    }

    private fromArabicNumber(n) {
        if (!n) return n;
        n = "" + n;
        n = n
            .replace(/٠/g, 0)
            .replace(/١/g, 1)
            .replace(/٢/g, 2)
            .replace(/٣/g, 3)
            .replace(/٤/g, 4)
            .replace(/٥/g, 5)
            .replace(/٦/g, 6)
            .replace(/٧/g, 7)
            .replace(/٨/g, 8)
            .replace(/٩/g, 9);

        return "" + n;
    }
}