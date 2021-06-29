export class ContentfulProducts {
  constructor(apiResponse) {
    this.data = apiResponse;
    this.products = this.data.items.map((product) => {
      return this.formatSingleProduct(product);
    });
  }

  formatSingleProduct(product) {
    const { variants, ...productData } = product.fields;
    return {
      id: product.sys.id,
      ...productData,
      variants: this.getVariants(variants),
    };
  }

  getVariants(variants) {
    return variants.map((variant) => {
      const { image, ...variantData } = this.getVariantData(
        variant.sys.id
      ).fields;
      return {
        id: variant.sys.id,
        ...variantData,
        image: {
          id: image.sys.id,
          ...this.getImageData(image.sys.id).fields,
        },
      };
    });
  }

  getVariantData(variantId) {
    return this.data.includes.Entry.find(
      (variant) => variant.sys.id === variantId
    );
  }

  getImageData(imageId) {
    return this.data.includes.Asset.find((image) => image.sys.id === imageId);
  }
}

export class ContentfulSingleProduct {
  constructor(apiResponse) {
    this.data = apiResponse;
    this.product = this.formatProduct();
  }

  formatProduct() {
    const { variants, ...productData } = this.data.includes.Entry[0].fields;
    return {
      id: this.data.includes.Entry[0].sys.id,
      ...productData,
      variants: this.getVariants(),
    };
  }

  getVariants() {
    return this.data.items.map((variant) => {
      const { image, ...variantData } = variant.fields;
      return {
        id: variant.sys.id,
        ...variantData,
        image: {
          id: variant.fields.image.sys.id,
          ...this.getImageData(image.sys.id).fields,
        },
      };
    });
  }

  getImageData = (imageId) => {
    return this.data.includes.Asset.filter(
      (image) => image.sys.id === imageId
    )[0];
  };
}
