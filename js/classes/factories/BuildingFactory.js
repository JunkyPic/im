class BuildingFactory {
    static asNew(classSuffix) {
        return eval('new Building' + classSuffix);
    }
}
