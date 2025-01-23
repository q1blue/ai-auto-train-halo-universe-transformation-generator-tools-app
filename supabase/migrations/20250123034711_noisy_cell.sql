/*
  # Initial Halo Universe Schema

  1. New Tables
    - `characters`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `faction` (text)
      - `rank` (text)
      - `status` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `weapons`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `type` (text)
      - `damage` (integer)
      - `range` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `vehicles`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `type` (text)
      - `capacity` (integer)
      - `speed` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `locations`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `type` (text)
      - `coordinates` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read data
    - Add policies for admin users to manage data
*/

-- Characters Table
CREATE TABLE IF NOT EXISTS characters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  faction text NOT NULL,
  rank text,
  status text DEFAULT 'Active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE characters ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Characters are viewable by everyone"
  ON characters
  FOR SELECT
  USING (true);

CREATE POLICY "Characters are editable by admins"
  ON characters
  FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

-- Weapons Table
CREATE TABLE IF NOT EXISTS weapons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  type text NOT NULL,
  damage integer NOT NULL,
  range integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE weapons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Weapons are viewable by everyone"
  ON weapons
  FOR SELECT
  USING (true);

CREATE POLICY "Weapons are editable by admins"
  ON weapons
  FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

-- Vehicles Table
CREATE TABLE IF NOT EXISTS vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  type text NOT NULL,
  capacity integer NOT NULL,
  speed integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Vehicles are viewable by everyone"
  ON vehicles
  FOR SELECT
  USING (true);

CREATE POLICY "Vehicles are editable by admins"
  ON vehicles
  FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

-- Locations Table
CREATE TABLE IF NOT EXISTS locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  type text NOT NULL,
  coordinates text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE locations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Locations are viewable by everyone"
  ON locations
  FOR SELECT
  USING (true);

CREATE POLICY "Locations are editable by admins"
  ON locations
  FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

-- Add updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_characters_updated_at
  BEFORE UPDATE ON characters
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_weapons_updated_at
  BEFORE UPDATE ON weapons
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_vehicles_updated_at
  BEFORE UPDATE ON vehicles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_locations_updated_at
  BEFORE UPDATE ON locations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();