abstract class Class {
    constructor(protected readonly platform: StudySystem) {}
    abstract deliverMaterials();
}

class HybridClass extends Class {
    deliverMaterials() {
        this.platform.sendMaterials(["PDF 1", "PDF 2"]);
    }
}

class InPersonClass extends Class {
    deliverMaterials() {
        this.platform.sendMaterials(["Book 1"]);
    }
}

interface StudySystem {
    sendMaterials(materials: String[]);
}

class Zoom implements StudySystem {
    sendMaterials(materials: String[]) {
        console.log("Delivered materials to Zoom", materials);
    }
}

class Moodle implements StudySystem {
    sendMaterials(materials: String[]) {
        console.log("Delivered materials to Moodle", materials);
    }
}

const zoom: StudySystem = new Zoom();
const hybridClass = new HybridClass(zoom);

hybridClass.deliverMaterials();

const moodle: StudySystem = new Moodle();
const inPersonClass = new InPersonClass(moodle);

inPersonClass.deliverMaterials();
