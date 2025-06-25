import { FormControl } from "@angular/forms";

export interface facture {
    id: FormControl< number | null>;
    designation: FormControl<string | null>;
    quantity: FormControl<number | null>;
    prix: FormControl<number| null>;
}