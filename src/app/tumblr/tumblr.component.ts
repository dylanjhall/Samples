import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
// import { wrapGrid } from 'animate-css-grid';
import { BehaviorSubject, EMPTY, from, fromEvent } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  pluck,
  shareReplay,
  switchMap,
} from 'rxjs/operators';
import { NgForOf, AsyncPipe } from '@angular/common';

const apiKey = `RSIq08oTL7lA1DyETOmqujDSph7rvP4akG8NRPz9os6ywJjBhE`;
const clientId = 'e972ca06cc4b961';

@Component({
    selector: 'app-tumblr',
    templateUrl: './tumblr-component.html',
    standalone: true,
    imports: [NgForOf, AsyncPipe]
})
export class TumblrComponent implements OnInit {
  largePositions: (0|1|2)[] = Array.from({ length: 250 }, () => (Math.random() < 0.2 ? 1 : 0));
  searchKey$ = new BehaviorSubject('kitten');
  results$ = this.searchKey$.pipe(
    filter(s => !!s),
    switchMap(key =>
      this.http
        .get<ImgurTags>(`https://api.imgur.com/3/gallery/t/${key}`, {
          headers: { Authorization: `Client-ID ${clientId}` },
        })
        .pipe(catchError(e => EMPTY))
    ),
    pluck('data', 'items'),
    filter(s => !!s),
    map(items =>
      items.filter((item: Item) =>
        [Type.ImageJPEG, Type.ImagePNG].includes(item.images && item.images[0].type)
      )
    ),
    shareReplay(1)
  );

  constructor(private http: HttpClient, private ref: ElementRef) {}

  setSearch(x) {
    console.log(x);
  }

  switch(y: number) {
    this.largePositions[y] += 1;
    if (this.largePositions[y] > 2) {
      this.largePositions[y] = 0;
    }
  }
  ngOnInit(): void {
    const elm = this.ref.nativeElement as HTMLElement;
    if (elm) {
      const inp = elm.getElementsByTagName('input')[0];
      from(import('animate-css-grid'))
        .pipe(
          map(({ wrapGrid }) => wrapGrid(elm.querySelector('#grid'))),
          switchMap(() => fromEvent(inp, 'input')),
          map((ev: InputEvent) => ev.target['value'] as string),
          debounceTime(400),
          distinctUntilChanged(),
          filter(key => key.length > 0)
        )
        .subscribe(this.searchKey$);
    }
  }
}

export interface ImgurTags {
  data: Data;
  success: boolean;
  status: number;
}

export interface Item {
  id: string;
  title: string;
  description: null;
  datetime: number;
  cover?: string;
  cover_width?: number;
  cover_height?: number;
  account_url: string;
  account_id: number;
  privacy?: Privacy;
  layout?: Layout;
  views: number;
  link: string;
  ups: number;
  downs: number;
  points: number;
  score: number;
  is_album: boolean;
  vote: null;
  favorite: boolean;
  nsfw: boolean;
  section: Section;
  comment_count: number;
  favorite_count: number;
  topic: Topic;
  topic_id: number;
  images_count?: number;
  in_gallery: boolean;
  is_ad: boolean;
  tags: Data[];
  ad_type: number;
  ad_url: string;
  in_most_viral: boolean;
  include_album_ads?: boolean;
  images?: Image[];
  ad_config: AdConfig;
  type?: Type;
  animated?: boolean;
  width?: number;
  height?: number;
  size?: number;
  bandwidth?: number;
  has_sound?: boolean;
  edited?: number;
}

export interface Data {
  name: string;
  display_name: string;
  followers: number;
  total_items: number;
  following: boolean;
  is_whitelisted: boolean;
  background_hash: string;
  thumbnail_hash: null | string;
  accent: null | string;
  background_is_animated: boolean;
  thumbnail_is_animated: boolean;
  is_promoted: boolean;
  description: Description;
  logo_hash: null;
  logo_destination_url: null;
  description_annotations: DescriptionAnnotations;
  items?: Item[];
}

export interface AdConfig {
  safeFlags: SafeFlag[];
  highRiskFlags: any[];
  unsafeFlags: UnsafeFlag[];
  wallUnsafeFlags: string[];
  showsAds: boolean;
}

export enum SafeFlag {
  Album = 'album',
  Gallery = 'gallery',
  InGallery = 'in_gallery',
  SixthModSafe = 'sixth_mod_safe',
}

export enum UnsafeFlag {
  OnsfwModUnsafe = 'onsfw_mod_unsafe',
  SixthModUnsafe = 'sixth_mod_unsafe',
  Under10 = 'under_10',
}

export interface Image {
  id: string;
  title: null | string;
  description: null | string;
  datetime: number;
  type: Type;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  vote: null;
  favorite: boolean;
  nsfw: null;
  section: null;
  account_url: null;
  account_id: null;
  is_ad: boolean;
  in_most_viral: boolean;
  has_sound: boolean;
  tags: any[];
  ad_type: number;
  ad_url: string;
  edited: string;
  in_gallery: boolean;
  link: string;
  mp4_size?: number;
  mp4?: string;
  gifv?: string;
  hls?: string;
  processing?: Processing;
  comment_count: null;
  favorite_count: null;
  ups: null;
  downs: null;
  points: null;
  score: null;
  looping?: boolean;
}

export interface Processing {
  status: Status;
}

export enum Status {
  Completed = 'completed',
}

export enum Type {
  ImageGIF = 'image/gif',
  ImageJPEG = 'image/jpeg',
  ImagePNG = 'image/png',
  VideoMp4 = 'video/mp4',
}

export enum Layout {
  Blog = 'blog',
}

export enum Privacy {
  Hidden = 'hidden',
}

export enum Section {
  Empty = '',
  Oddlysatisfying = 'oddlysatisfying',
  Test = 'test',
}

export enum Topic {
  NoTopic = 'No Topic',
}

export enum Description {
  April112020 = 'April 11 2020',
  BrushesLinesColor = 'brushes, lines, color',
  CreativeCreations = 'creative creations',
  CuteAndAdorable = 'cute and adorable',
  Empty = '',
  FelineFriends = 'feline friends',
  FoodAndRecipes = 'food and recipes',
  HumanSBestFriend = "human's best friend",
  LOLsROFLsLMAOS = 'LOLs, ROFLs, LMAOs',
  LightRoastOrDark = 'light roast or dark?',
  MotorheadsUnite = 'Motorheads unite!',
  NeatAndAmazing = 'neat and amazing',
  ThatSNoMooOhWaitYepThatSAMoon = "That's no moo- oh, wait. Yep, that's a moon.",
  VideosWithSound = 'videos with sound',
}

export interface DescriptionAnnotations {}
