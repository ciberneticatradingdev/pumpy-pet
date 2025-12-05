import { PetColor } from '../../common/types';
import { BasePetType } from '../basepettype';
import { States } from '../states';

export class Pumpy extends BasePetType {
    label = 'pumpy';
    static possibleColors = [PetColor.black];
    sequence = {
        startingState: States.sitIdle,
        sequenceStates: [
            {
                state: States.sitIdle,
                possibleNextStates: [
                    States.walkRight,
                    States.runRight,
                    States.lie,
                ],
            },
            {
                state: States.lie,
                possibleNextStates: [States.walkRight, States.walkLeft],
            },
            {
                state: States.walkRight,
                possibleNextStates: [
                    States.sitIdle,
                    States.lie,
                    States.walkLeft,
                    States.runLeft,
                ],
            },
            {
                state: States.runRight,
                possibleNextStates: [
                    States.sitIdle,
                    States.lie,
                    States.walkLeft,
                    States.runLeft,
                ],
            },
            {
                state: States.walkLeft,
                possibleNextStates: [
                    States.sitIdle,
                    States.lie,
                    States.walkRight,
                    States.runRight,
                ],
            },
            {
                state: States.runLeft,
                possibleNextStates: [
                    States.sitIdle,
                    States.lie,
                    States.walkRight,
                    States.runRight,
                ],
            },
            {
                state: States.chase,
                possibleNextStates: [States.idleWithBall],
            },
            {
                state: States.idleWithBall,
                possibleNextStates: [States.sitIdle, States.lie],
            },
        ],
    };
    get emoji(): string {
        return '🎃';
    }
    get hello(): string {
        return `I am Pumpy!`;
    }
}

export const PUMPY_NAMES: ReadonlyArray<string> = [
    'Pumpy',
    'Pumpo',
    'Pumpster',
    'Pumpkin',
    'Pumps',
];
