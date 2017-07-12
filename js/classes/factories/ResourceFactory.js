class ResourceFactory {
    static asNew(classSuffix) {
        return eval('new Resource' + classSuffix);
    }
}
