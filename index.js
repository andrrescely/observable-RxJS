import { of } from "rxjs";
import { map, filter } from "rxjs/operators";

of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
  .pipe(
    map((num) => num * 2),
    filter((num) => num % 2 !== 0)
  )
  .subscribe((result) => console.log("Resultado:", result));
