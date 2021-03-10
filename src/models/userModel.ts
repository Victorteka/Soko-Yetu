import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    public id: String = ""

    @Column()
    @Index({unique: true})
    public userName: String = ""

    @Index({unique: true})
    @Column("varchar", {length: 500, nullable: true})
    public email: String | null = null

    @Column("varchar", {length: 1000, nullable: true})
    public password: String = ""
}