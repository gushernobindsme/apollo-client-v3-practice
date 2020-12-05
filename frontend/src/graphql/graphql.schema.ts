
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateSharkInput {
    name?: string;
}

export class UpdateSharkInput {
    id?: number;
    rate?: number;
}

export abstract class IQuery {
    abstract sharks(): Shark[] | Promise<Shark[]>;

    abstract shark(id: number): Shark | Promise<Shark>;
}

export abstract class IMutation {
    abstract createShark(input?: CreateSharkInput): Shark | Promise<Shark>;

    abstract updateShark(input?: UpdateSharkInput): Shark | Promise<Shark>;
}

export class Shark {
    id?: number;
    name?: string;
    rate?: number;
}