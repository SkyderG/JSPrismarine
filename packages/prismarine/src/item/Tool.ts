import Item, { ItemProps } from './Item.js';

export default class Tool extends Item {
    public constructor(args: ItemProps) {
        super(args);
    }

    public getMaxAmount() {
        return 1;
    }

    public isTool() {
        return true;
    }
}
