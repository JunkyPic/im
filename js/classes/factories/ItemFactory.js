class ItemFactory {
    static asNew(classSuffix, ...args) {
        // This is as stupid as it looks
        switch (classSuffix){
            case 'Bronze':
                return new ItemBronze(args[0]);
            case 'Copper':
                return new ItemCopper(args[0]);
            case 'Iron':
                return new ItemIron(args[0]);
            case 'Steel':
                return new ItemSteel(args[0]);
            case 'Stone':
                return new ItemStone(args[0]);
            case 'Titanium':
                return new ItemTitanium(args[0]);
            default:
                throw new Error('Unable to find class Item' + classSuffix);
        }
    }
}
