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
      characters: {
        Row: {
          id: string
          name: string
          description: string
          faction: string
          rank: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          faction: string
          rank?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          faction?: string
          rank?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      weapons: {
        Row: {
          id: string
          name: string
          description: string
          type: string
          damage: number
          range: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          type: string
          damage: number
          range: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          type?: string
          damage?: number
          range?: number
          created_at?: string
          updated_at?: string
        }
      }
      vehicles: {
        Row: {
          id: string
          name: string
          description: string
          type: string
          capacity: number
          speed: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          type: string
          capacity: number
          speed: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          type?: string
          capacity?: number
          speed?: number
          created_at?: string
          updated_at?: string
        }
      }
      locations: {
        Row: {
          id: string
          name: string
          description: string
          type: string
          coordinates: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          type: string
          coordinates?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          type?: string
          coordinates?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}