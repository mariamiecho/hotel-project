import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";



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

    // static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (control.value === "maria")
    //                 resolve({ shouldBeUnique: true });
    //             else
    //                 resolve(null);
    //         }, 2000);
    //     })
    // }

}
