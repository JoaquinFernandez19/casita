export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Movie: {
        Row: {
          id: number
          movie_id: string
          rating: number
          status: string | null
          user: number | null
        }
        Insert: {
          id?: number
          movie_id: string
          rating?: number
          status?: string | null
          user?: number | null
        }
        Update: {
          id?: number
          movie_id?: string
          rating?: number
          status?: string | null
          user?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Movie_user_fkey"
            columns: ["user"]
            referencedRelation: "Users"
            referencedColumns: ["id"]
          }
        ]
      }
      TravelWallet: {
        Row: {
          amount: number | null
          id: number
        }
        Insert: {
          amount?: number | null
          id?: number
        }
        Update: {
          amount?: number | null
          id?: number
        }
        Relationships: []
      }
      TravelWalletModification: {
        Row: {
          amount: number | null
          created_at: string
          id: number
          prevAmount: number | null
          travelWallet: number | null
          user: number | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          id?: number
          prevAmount?: number | null
          travelWallet?: number | null
          user?: number | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          id?: number
          prevAmount?: number | null
          travelWallet?: number | null
          user?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "TravelWalletModification_travelWallet_fkey"
            columns: ["travelWallet"]
            referencedRelation: "TravelWallet"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "TravelWalletModification_user_fkey"
            columns: ["user"]
            referencedRelation: "Users"
            referencedColumns: ["id"]
          }
        ]
      }
      Users: {
        Row: {
          created_at: string
          email: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
