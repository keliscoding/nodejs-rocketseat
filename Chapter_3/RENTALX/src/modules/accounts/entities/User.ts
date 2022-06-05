import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from "uuid";

@Entity("users")
export default class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    drive_license: string;

    @Column()
    isAdmin: boolean;

    @CreateDateColumn()
    crated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
