module.exports = {
    default: {
      require: ["./steps/Login.steps.ts","./steps/ShoppingCart.steps.ts",
        "./steps/Checkout.steps.ts","../support/hooks.ts"], // Ensure correct path
      requireModule: ["ts-node/register"],
      format: ["progress"],
      retry : 1
    }
    
  };
  