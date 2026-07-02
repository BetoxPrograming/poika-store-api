-- Insert the initial category records.
-- External image URLs are stored in the database to avoid local image files.
INSERT INTO categories (
    description,
    image_path,
    active
)
VALUES
    (
        'Electronics',
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80',
        TRUE
    ),
    (
        'Furniture',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
        TRUE
    ),
    (
        'Clothing',
        'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80',
        TRUE
    ),
    (
        'Video Games',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
        TRUE
    ),
    (
        'Inactive Test Category',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
        FALSE
    )
    ON CONFLICT (description)
DO UPDATE SET
    -- Update the existing image URL when the category already exists.
    image_path = EXCLUDED.image_path,

           -- Keep the active state synchronized with the seed.
           active = EXCLUDED.active,

           -- Record when the category was updated.
           updated_at = CURRENT_TIMESTAMP;