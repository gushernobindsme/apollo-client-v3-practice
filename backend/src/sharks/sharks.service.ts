import { Injectable } from '@nestjs/common';
import { CreateSharkInput, Shark, UpdateSharkInput } from '../graphql.schema';

@Injectable()
export class SharksService {
  private readonly sharks: Shark[] = [
    {
      id: 1,
      originalTitle: 'Open Water',
      japaneseTitle: 'オープン・ウォーター',
      rate: 0,
    },
    {
      id: 2,
      originalTitle: '47 Meters Down',
      japaneseTitle: '海底47m',
      rate: 0,
    },
    {
      id: 3,
      originalTitle: '47 Meters Down: Uncaged',
      japaneseTitle: '海底47m 古代マヤの死の迷宮',
      rate: 0,
    },
    {
      id: 4,
      originalTitle: 'SHARK ATTACK',
      japaneseTitle: 'シャークアタック',
      rate: 0,
    },
    {
      id: 5,
      originalTitle: 'Shark Tale',
      japaneseTitle: 'シャーク・テイル',
      rate: 0,
    },
    {
      id: 6,
      originalTitle: 'SHARKTOPUS',
      japaneseTitle: 'シャークトパス',
      rate: 0,
    },
    {
      id: 7,
      originalTitle: 'Shark Night 3D',
      japaneseTitle: 'シャーク・ナイト',
      rate: 1,
    },
    {
      id: 8,
      originalTitle: 'Sharknado',
      japaneseTitle: 'シャークネード',
      rate: 5,
    },
    {
      id: 9,
      originalTitle: 'Sharknado 2: The Second One',
      japaneseTitle: 'シャークネード カテゴリー2',
      rate: 4,
    },
    {
      id: 10,
      originalTitle: 'Sharknado 3: Oh Hell No!',
      japaneseTitle: 'シャークネード エクストリーム・ミッション',
      rate: 4,
    },
    {
      id: 11,
      originalTitle: 'Sharknado: The 4th Awakens',
      japaneseTitle: 'シャークネード4',
      rate: 4,
    },
    {
      id: 12,
      originalTitle: 'Sharknado 5: Global Swarming',
      japaneseTitle: 'シャークネード5 ワールド・タイフーン',
      rate: 4,
    },
    {
      id: 13,
      originalTitle: "The Last Sharknado: It's About Time",
      japaneseTitle: 'シャークネード ラスト・チェーンソー 4DX',
      rate: 5,
    },
    {
      id: 14,
      originalTitle: 'Jurassic Shark',
      japaneseTitle: 'ジュラシック・シャーク',
      rate: 0,
    },
    {
      id: 15,
      originalTitle: 'Up from the Depths',
      japaneseTitle: 'ジュラシック・ジョーズ',
      rate: 0,
    },
    { id: 16, originalTitle: 'Jaws', japaneseTitle: 'ジョーズ', rate: 5 },
    {
      id: 17,
      originalTitle: 'Cannery Rodent',
      japaneseTitle: 'ジョーズの追跡',
      rate: 0,
    },
    {
      id: 18,
      originalTitle: 'Puss n Boats',
      japaneseTitle: '水兵さんも楽じゃない',
      rate: 0,
    },
    {
      id: 19,
      originalTitle: '2-HEADED SHARK ATTACK',
      japaneseTitle: 'ダブルヘッド・ジョーズ',
      rate: 4,
    },
    {
      id: 20,
      originalTitle: 'Deep Blue Sea',
      japaneseTitle: 'ディープ・ブルー',
      rate: 0,
    },
    {
      id: 21,
      originalTitle: 'SHARK ATTACK 2',
      japaneseTitle: 'ディープ・ライジング',
      rate: 0,
    },
    {
      id: 22,
      originalTitle: 'Shark Attack 3: Megalodon',
      japaneseTitle: 'ディープ・ライジング コンクエスト',
      rate: 0,
    },
    {
      id: 23,
      originalTitle: 'Sea Scouts',
      japaneseTitle: 'ドナルドの海洋団',
      rate: 0,
    },
    {
      id: 24,
      originalTitle: 'No Sail',
      japaneseTitle: 'ドナルドの漂流記',
      rate: 0,
    },
    {
      id: 25,
      originalTitle: '3-HEADED SHARK ATTACK',
      japaneseTitle: 'トリプルヘッド・ジョーズ',
      rate: 0,
    },
    {
      id: 26,
      originalTitle: 'Shark Lake',
      japaneseTitle: 'ドルフ・ラングレン 処刑鮫',
      rate: 0,
    },
    {
      id: 27,
      originalTitle: 'SAND SHARKS',
      japaneseTitle: 'ビーチ・シャーク',
      rate: 4,
    },
    {
      id: 28,
      originalTitle: 'SWAMP SHARK',
      japaneseTitle: 'フライング・ジョーズ',
      rate: 0,
    },
    {
      id: 29,
      originalTitle: 'Mega Shark vs Crocosaurus',
      japaneseTitle: 'メガ・シャークVSクロコザウルス',
      rate: 0,
    },
    {
      id: 30,
      originalTitle: 'Mega Shark vs Giant Octopus',
      japaneseTitle: 'メガ・シャークVSジャイアント・オクトパス',
      rate: 0,
    },
    {
      id: 31,
      originalTitle: 'Mega Shark Versus Mecha Shark',
      japaneseTitle: 'メガ・シャークVSメカ・シャーク',
      rate: 0,
    },
    {
      id: 32,
      originalTitle: 'The Meg',
      japaneseTitle: 'MEG ザ・モンスター',
      rate: 4,
    },
    {
      id: 33,
      originalTitle: 'Red Water',
      japaneseTitle: 'レッド・ウォーター/サメ地獄',
      rate: 0,
    },
    {
      id: 34,
      originalTitle: 'The Shallows',
      japaneseTitle: 'ロスト・バケーション',
      rate: 0,
    },
  ];

  create(input: CreateSharkInput): Shark {
    const shark = {
      id: this.sharks.length + 1,
      originalTitle: input.originalTitle,
      japaneseTitle: input.japaneseTitle,
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
