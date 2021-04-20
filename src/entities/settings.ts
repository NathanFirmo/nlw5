import { Column, CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuid} from "uuid"

class Setting {
    @PrimaryColumn()
    id: string;
    @Column()
    username: string;
    @Column()
    chat: boolean
    @UpdateDateColumn()
    updated_at: Date;
    @CreateDateColumn()
    createde_at: Date;

    constructor() {
        if(!this.id){
        this.id = uuid();
        }
    }
}
export {Setting}