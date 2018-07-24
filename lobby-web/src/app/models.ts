export interface User {
  id: string;
  name: string;
  last_name: string;
  username: string;
  followers: User[];
  following: User[];
  posts: Post[];
  plays: Play[];
  is_player: boolean;
  info_player: Player;
}

export interface Player {
  looking_for_team: boolean;
  looking_for_sponsor: boolean;
  bio: {
    description: string;
    created_on: Date;
    club: Club[];
    sponsor: Sponsor[];
    leagues: League[];
  };
  history: {
    clubs: [
      {
        clubs: Club[];
        first_date: Date;
        last_date: Date;
      }
    ];
    sponsors: [
      {
        sponsors: Sponsor[];
        first_date: Date;
        last_date: Date;
      }
    ];
    leagues: [
      {
        leagues: League[];
        first_date: Date;
        last_date: Date;
      }
    ];
  };
}
export interface Post {
  id: string;
  created: {
    date: Date;
    author: User;
  };
  content: {
    message: string;
    primary_link: string;
  };
  rt_by: User[];
  fav_by: User[];
}

export interface Club {
  id: string;
  name: string;
  followers: User[];
  following: User[];
  player: User[];
  sponsors: Sponsor[];
  league: League[];
  bio: {
    description: string;
    created_on: Date;
  };
  history: {
    sponsors: [
      {
        sponsors: Sponsor[];
        first_date: Date;
        last_date: Date;
      }
    ];
  };
}

export interface Sponsor {
  id: string;
  name: string;
}

export interface Play {
  id: string;
  game: string;
  author: User;
  content: {
    video_path: string;
    message: string;
  };
  fav_by: User[];
  votes: number;
}

export interface League {
  id: string;
  name: string;
  team: Club[];
  followers: User[];
}
