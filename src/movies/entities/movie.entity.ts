import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'movies' })
export class MovieEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'title',
        unique: true,
    })
    title: string;

    @Column({
        name: 'director',
    })
    director: string;

    @Column({
        name: 'producer',
    })
    producer: string;

    @Column({
        name: 'release_date',
        nullable: true,
    })
    releaseDate: string;

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
