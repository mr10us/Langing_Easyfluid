"use server";

export const registerUser = async (data) => {
  try {
    const response = await fetch(
      "https://app.easyfluid.eu/api/trial-account/confirm/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      
      return Object.values(errorData)[0];
  }

    return response.status;
  } catch (error) {
    console.error(error);
  }
};
