import Solid from '../Solid';
import { BlockIdsType } from '../BlockIdsType';
import { BlockToolType } from '../BlockToolType';
import { ItemTieredToolType } from '../../item/ItemTieredToolType';

export default class Basalt extends Solid {
    constructor() {
        super({
            name: 'minecraft:basalt',
            id: BlockIdsType.Basalt,
            hardness: 1.25
        });
    }

    public getToolType() {
        return BlockToolType.Pickaxe;
    }

    public getToolHarvestLevel() {
        return ItemTieredToolType.Wood;
    }
}
