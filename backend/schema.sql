CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(190) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  profile_photo_url TEXT,
  language_pref VARCHAR(10) DEFAULT 'en',
  created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE trips (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(150) NOT NULL,
  description TEXT,
  cover_image_url TEXT,
  travel_type VARCHAR(40),
  budget_limit NUMERIC(12,2),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL
);
CREATE TABLE trip_stops (
  id BIGSERIAL PRIMARY KEY,
  trip_id BIGINT NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  city_name VARCHAR(120) NOT NULL,
  country VARCHAR(100),
  stop_order INT NOT NULL,
  start_date DATE,
  end_date DATE
);
CREATE TABLE activities (
  id BIGSERIAL PRIMARY KEY,
  trip_stop_id BIGINT REFERENCES trip_stops(id) ON DELETE CASCADE,
  title VARCHAR(160) NOT NULL,
  category VARCHAR(40),
  starts_at TIMESTAMP,
  duration_minutes INT,
  estimated_cost NUMERIC(10,2),
  rating NUMERIC(2,1)
);
CREATE TABLE budgets (
  id BIGSERIAL PRIMARY KEY,
  trip_id BIGINT UNIQUE NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  transport_cost NUMERIC(10,2) DEFAULT 0,
  hotel_cost NUMERIC(10,2) DEFAULT 0,
  activities_cost NUMERIC(10,2) DEFAULT 0,
  food_cost NUMERIC(10,2) DEFAULT 0
);
CREATE TABLE packing_lists (
  id BIGSERIAL PRIMARY KEY,
  trip_id BIGINT NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  category VARCHAR(40) NOT NULL,
  item_name VARCHAR(120) NOT NULL,
  is_packed BOOLEAN DEFAULT FALSE
);
CREATE TABLE notes (
  id BIGSERIAL PRIMARY KEY,
  trip_id BIGINT NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  reminder_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE shared_trips (
  id BIGSERIAL PRIMARY KEY,
  trip_id BIGINT UNIQUE NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  share_token VARCHAR(120) UNIQUE NOT NULL,
  is_public BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE analytics (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES users(id) ON DELETE SET NULL,
  trip_id BIGINT REFERENCES trips(id) ON DELETE SET NULL,
  event_type VARCHAR(80) NOT NULL,
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
