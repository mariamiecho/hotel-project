import { AbstractControl, Validators } from "@angular/forms";



export class ReservationValidators {
    static cannotContainSpace(control: AbstractControl) {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null
    }

    static minPrice(control: AbstractControl) {
        const value = control.value as number;
        return Validators.min(9)(control);
    }
}
// minmum price is 10, actual price = control.that?? value
//return {minlength: {
//requiredLength: 10,
//actualLength: control.value.length
// }}