import { Injectable } from '@nestjs/common';
import { CreateSharkInput, Shark, UpdateSharkInput } from '../graphql.schema';
import { isNode } from 'graphql/language/ast';

@Injectable()
export class SharksService {
  private readonly sharks: Shark[] = [
    { id: 1, name: 'Open Water', rate: 0 },
    { id: 2, name: '47 Meters Down', rate: 0 },
    { id: 3, name: '47 Meters Down: Uncaged', rate: 0 },
    { id: 4, name: 'SHARK ATTACK', rate: 0 },
    { id: 5, name: 'Shark Tale', rate: 0 },
    { id: 6, name: 'SHARKTOPUS', rate: 0 },
    { id: 7, name: 'Shark Night 3D', rate: 1 },
    { id: 8, name: 'Sharknado', rate: 5 },
    { id: 9, name: 'Sharknado 2: The Second One', rate: 4 },
    { id: 10, name: 'Sharknado 3: Oh Hell No!', rate: 4 },
    { id: 11, name: 'Sharknado: The 4th Awakens', rate: 4 },
    { id: 12, name: 'Sharknado 5: Global Swarming', rate: 4 },
    { id: 13, name: "The Last Sharknado: It's About Time", rate: 5 },
    { id: 14, name: 'Jurassic Shark', rate: 0 },
    { id: 15, name: 'Up from the Depths', rate: 0 },
    { id: 16, name: 'Jaws', rate: 5 },
    { id: 17, name: 'Cannery Rodent', rate: 0 },
    { id: 18, name: 'Puss n Boats', rate: 0 },
    { id: 19, name: '2-HEADED SHARK ATTACK', rate: 4 },
    { id: 20, name: 'Deep Blue Sea', rate: 0 },
    { id: 21, name: 'SHARK ATTACK 2', rate: 0 },
    { id: 22, name: 'Shark Attack 3: Megalodon', rate: 0 },
    { id: 23, name: 'Sea Scouts', rate: 0 },
    { id: 24, name: 'No Sail', rate: 0 },
    { id: 25, name: '3-HEADED SHARK ATTACK', rate: 0 },
    { id: 26, name: 'Shark Lake', rate: 0 },
    { id: 27, name: 'SAND SHARKS', rate: 4 },
    { id: 28, name: 'SWAMP SHARK', rate: 0 },
    { id: 29, name: 'Mega Shark vs Crocosaurus', rate: 0 },
    { id: 30, name: 'Mega Shark vs Giant Octopus', rate: 0 },
    { id: 31, name: 'Mega Shark Versus Mecha Shark', rate: 0 },
    { id: 32, name: 'The Meg', rate: 4 },
    { id: 33, name: 'Red Water', rate: 0 },
    { id: 34, name: 'The Shallows', rate: 0 },
  ];

  create(input: CreateSharkInput): Shark {
    const shark = {
      id: this.sharks.length + 1,
      name: input.name,
      rate: 0,
    };
    this.sharks.push(shark);
    return shark;
  }

  update(input: UpdateSharkInput): Shark {
    const index = this.sharks.findIndex((shark) => shark.id === input.id);
    const shark = this.sharks[index];
    shark.rate = input.rate;
    this.sharks.splice(index, 1, shark);
    return shark;
  }

  findAll(): Shark[] {
    return this.sharks;
  }

  getById(id: number): Shark {
    return this.sharks.find((shark) => shark.id === id);
  }
}
