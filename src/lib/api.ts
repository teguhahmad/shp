import { supabase } from './supabase';

export async function searchProducts(keyword: string) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Not authenticated');
    }

    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/shopee-api/search?keyword=${encodeURIComponent(keyword)}`,
      {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    return await response.json();
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
}

export async function getProductDetails(itemId: string, shopId: string) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Not authenticated');
    }

    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/shopee-api/product?itemId=${itemId}&shopId=${shopId}`,
      {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting product details:', error);
    throw error;
  }
}