import { TypeChambre } from "./TypeChambre";
import { Bloc } from "./Bloc";

export class Chambre{
    idChambre ?:number;
    numeroChambre ?:number;
    typeChambre ?:TypeChambre;
    bloc ?: Bloc;
}