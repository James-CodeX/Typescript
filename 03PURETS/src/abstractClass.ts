abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getserpia(): void
    getReelTime(): number {
        // some complex calculation
        return 8;
    }

}

class instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    getserpia(): void {
        console.log("Serpia created");
    }
}   
 