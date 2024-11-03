import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'username',
        unique: true
    })
    username: string;

    @Column({
        name: 'email',
        unique: true
    })
    email: string

    @Column({
        name: 'password'
    })
    password: string

    @CreateDateColumn({
        name: 'created_at',
        type: "timestamp",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type: "timestamp",
        nullable: true,
    })
    updateAt: Date;
}
