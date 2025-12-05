import { DOG_NAMES } from '../panel/pets/dog';
import { PANDA_NAMES } from '../panel/pets/panda';
import { RAT_NAMES } from '../panel/pets/rat';
import { PUMPY_NAMES } from '../panel/pets/pumpy';
import { PetType } from './types';

export function randomName(type: PetType): string {
    const collection: ReadonlyArray<string> =
        (
            {
                [PetType.dog]: DOG_NAMES,
                [PetType.rat]: RAT_NAMES,
                [PetType.panda]: PANDA_NAMES,
                [PetType.pumpy]: PUMPY_NAMES,
            } as Record<PetType, ReadonlyArray<string>>
        )[type] ?? PANDA_NAMES;

    return (
        collection[Math.floor(Math.random() * collection.length)] ?? 'Unknown'
    );
}
