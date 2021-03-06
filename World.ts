
// Interface definitions for worlds

interface ObjectDefinition {
    form: string; 
    size: string; 
    color: string;
}

/**
 * Interface used to keep track of the coordinates of objects
 */
interface Coord{
        x: number; //x coordinate
        y: number; //y coordinate
    }
    
/**
 * Interface used to link an obj with its coordinates and its id
 */
interface ObjWCoord extends ObjectDefinition{
        coord?: Coord; //optional if an object is held
        id: string; //Identifier
    }

interface WorldState {
    stacks: string[][];
    holding: string;
    arm: number;
    objects: { [s:string]: ObjectDefinition; };
    examples?: string[];
}

interface World {
    currentState : WorldState;

    printWorld(callback? : () => void) : void;
    performPlan(plan: string[], callback? : () => void) : void;

    readUserInput(prompt : string, callback : (string) => void) : void;
    printSystemOutput(output : string, participant? : string) : void;
    printDebugInfo(info : string) : void;
    printError(error : string, message? : string) : void;
}
